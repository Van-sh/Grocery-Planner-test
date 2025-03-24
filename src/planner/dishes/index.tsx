import { Button, Modal, ModalContent, Pagination, useDisclosure } from "@heroui/react";
import { useCallback, useEffect, useState } from "react";

import GetErrorScreen from "../../common/getErrorScreen";
import Loader from "../../common/loader";
import { addToast } from "../../common/toast/slice";
import { getErrorMessage } from "../../helper";
import { useAppDispatch } from "../../store";
import { useCreateDishMutation, useGetDishesQuery, useUpdateDishMutation } from "./api";
import List from "./list";
import { type TDishes } from "./types";

import PlusIcon from "../../assets/plus";
import BlankScreen from "../../common/blankScreen";
import Search from "../../common/search";
import CreateForm from "./createForm";

const limit = 10;
export default function Dishes() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const [selectedDish, setSelectedDish] = useState<TDishes>();
  const dispatch = useAppDispatch();
  const {
    isLoading,
    isError: isGetError,
    error,
    isSuccess: isGetSuccess,
    data: { data = [], count = 0 } = {},
    refetch,
  } = useGetDishesQuery({ query, page });
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const [create, { isLoading: isCreateLoading, status: createStatus }] = useCreateDishMutation();
  const [update, { isLoading: isUpdateLoading, status: updateStatus }] = useUpdateDishMutation();

  const handleClose = useCallback(() => {
    onEditModalClose();
    setSelectedDish(undefined);
  }, [onEditModalClose]);

  const handleMutationSuccess = useCallback(
    (action: string) => {
      refetch();
      dispatch(
        addToast({
          message: `Dish ${action} successfully`,
          type: "success",
          autoClose: true,
        }),
      );
    },
    [dispatch, refetch],
  );

  const handleMutationError = useCallback(
    (action: string) => {
      dispatch(
        addToast({
          message: `Failed to ${action} dish`,
          type: "error",
          autoClose: true,
        }),
      );
    },
    [dispatch],
  );

  const handleEdit = (item: TDishes) => {
    setSelectedDish(item);
    onEditModalOpen();
  };

  useEffect(() => {
    if (createStatus === "fulfilled") {
      handleClose();
      handleMutationSuccess("created");
    } else if (createStatus === "rejected") {
      handleMutationError("create");
    }
  }, [createStatus, handleClose, handleMutationSuccess, handleMutationError]);

  useEffect(() => {
    if (updateStatus === "fulfilled") {
      handleClose();
      handleMutationSuccess("updated");
    } else if (updateStatus === "rejected") {
      handleMutationError("update");
    }
  }, [updateStatus, handleClose, handleMutationSuccess, handleMutationError]);

  return (
    <div className="flex justify-center">
      <div className="max-w-[1024px] w-full px-6">
        <h1 className="text-2xl">Dishes</h1>
        <Search name="Ingredients" query={query} setQuery={setQuery} />

        {isLoading && <Loader />}
        {isGetSuccess &&
          (data.length === 0 ? (
            <BlankScreen name="Dishes" onAdd={onEditModalOpen} />
          ) : (
            <>
              <List data={data} onEdit={handleEdit} onDelete={() => console.log("UnImplemented")} />
              <div className="mt-4 flex justify-end mb-24 sm:mb-0">
                <Pagination
                  showControls
                  total={Math.ceil(count / limit)}
                  page={page}
                  onChange={setPage}
                />
              </div>
            </>
          ))}
        {isGetError && <GetErrorScreen errorMsg={getErrorMessage(error)} onRetry={refetch} />}
        <Button
          color="primary"
          variant="shadow"
          className="fixed bottom-8 right-8"
          onPress={onEditModalOpen}
        >
          <PlusIcon />
          Create
        </Button>

        <Modal
          isOpen={isEditModalOpen}
          onClose={handleClose}
          isDismissable={false}
          isKeyboardDismissDisabled
          placement="top-center"
          scrollBehavior="outside"
        >
          <ModalContent>
            {() => (
              <CreateForm
                initialValues={selectedDish}
                isLoading={isCreateLoading || isUpdateLoading}
                onClose={handleClose}
                onCreate={(data, id) => {
                  if (id) {
                    update({ data, id });
                  } else {
                    create(data);
                  }
                }}
              />
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
