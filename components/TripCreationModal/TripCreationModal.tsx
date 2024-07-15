import { TravelCreation } from "@/features/travels/interfaces";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface TripCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTripCreation: (trip: TravelCreation) => void;
}

export const TripCreationModal = ({
  isOpen,
  onClose,
  onTripCreation,
}: TripCreationModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="max-w-lg space-y-4 bg-white px-8 pb-8  rounded-lg relative w-full">
          <div
            onClick={onClose}
            className="bg-black rounded-full absolute top-4 right-4 cursor-pointer"
          >
            <XMarkIcon className="h-4 w-4 m-1 text-white" />
          </div>
          <DialogTitle>
            <div>
              <h1 className="text-3xl">Create a trip</h1>
            </div>
          </DialogTitle>
          <Formik<TravelCreation>
            enableReinitialize
            initialValues={{
              title: "",
              introduction: "",
              description: "",
              photo_url: "",
              itinerary: [],
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string().required(),
            })}
            onSubmit={(values) => {
              console.log("Trip creation", values);
              onTripCreation(values);
              onClose();
            }}
          >
            {({
              handleSubmit,
              values,
              setFieldValue,
              errors,
              handleChange,
            }) => (
              <>
                <Input
                  name="title"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  error={errors.title}
                  placeholder="Italy"
                />
                <Input
                  name="introduction"
                  value={values.introduction}
                  onChange={(e) => {
                    setFieldValue("introduction", e.target.value);
                  }}
                  error={errors.introduction}
                  placeholder="From Rome to Venice..."
                />
                <Input
                  name="description"
                  value={values.description}
                  onChange={(e) => {
                    setFieldValue("description", e.target.value);
                  }}
                  error={errors.description}
                  placeholder="Discover the wonders of the Roman Empire..."
                />
                <Input
                  name="photo_url"
                  value={values.photo_url}
                  onChange={(e) => {
                    setFieldValue("photo_url", e.target.value);
                  }}
                  error={errors.photo_url}
                  placeholder="Image URL"
                />
                <Button
                  type="submit"
                  className="bg-black text-white py-2 px-4 rounded-full"
                  onClick={(e) => handleSubmit()}
                >
                  Save
                </Button>
              </>
            )}
          </Formik>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
