import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Day23FormikAndYup() {
  // Define the validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Form submission handler
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    setSubmitting(false);
    alert("Form submitted successfully!");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="p-4 max-w-md mx-auto space-y-4 border rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Day23FormikAndYup;
