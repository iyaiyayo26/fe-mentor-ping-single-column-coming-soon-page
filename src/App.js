import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  // --- email validation ---
  const submitEmail = (values) => {
    setTimeout(() => {
      formik.setSubmitting(false);
      alert(`sending to ${formik.values.email}`);
      formik.resetForm();
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required().email("Please Provide a valid email address"),
    }),
    onSubmit: submitEmail,
  });
  // --- end of email validation ---
  return (
    <div className="container mt-10">
      {/* --- header --- */}
      <article className="header">
        <h2 className="title uppercase text-center font-bold mb-8 text-xl lg:text-2xl">
          ping<span className="text-Blue-ext">.</span>
        </h2>
        <h2 className="sub-title text-xl text-center text-Gray-ext font-light mb-3 lg:text-3xl">
          We are launching <span className="font-bold text-black">soon!</span>
        </h2>
        <p className="description text-center text-sm lg:text-base mb-7">Subscribe and get notified</p>
      </article>
      {/* --- end of header --- */}

      {/* --- email input form --- */}
      <div className="input-email-form mb-16">
        <form onSubmit={formik.handleSubmit} className="flex flex-col px-10 lg:flex-row lg:space-x-1 lg:px-28">
          <div className="email lg:w-[70%]">
            <input
              type="text"
              name="email"
              placeholder="Your email address..."
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border border-Gray-ext focus:outline-none focus:ring-1  pl-5  w-full  rounded-full h-10 lg:translate-y-3  invalid:focus:ring-red-500 invalid:focus:border-red-500"
            />
            {formik.errors.email && <p className="error-message text-xs text-red-500 italic text-center lg:translate-y-3 lg:text-start lg:ml-5">{formik.errors.email}</p>}
          </div>
          <button className="btn-submit-email border border-Blue-ext bg-Blue-ext w-full mt-3 h-10 rounded-full text-white lg:w-[30%]" type="submit" disabled={formik.isSubmitting}>
            Notify Me
          </button>
        </form>
      </div>
      {/* --- end of email input form --- */}

      {/* --- image dashboard --- */}
      <img src=".\images\illustration-dashboard.png" alt="img-dashboard" className="px-5 mb-20 lg:px-28" />
      {/* --- end of image dashboard --- */}

      {/* --- footer --- */}
      <footer className="">
        {/* --- social media link --- */}
        <div className="social-media flex justify-center space-x-3 mb-7 lg:space-x-6">
          <button className="border border-Gray-ext w-[40px] h-[40px] flex justify-center rounded-full">
            <a href="http://facebook.com">
              <img src=".\images\facebook.svg" alt="facebook" className="w-[25px] mt-1" />
            </a>
          </button>
          <button className="border border-Gray-ext w-[40px] h-[40px]  rounded-full flex justify-center">
            <a href="http://twitter.com">
              <img src=".\images\twitter.svg" alt="twitter" className="w-[25px] mt-2" />
            </a>
          </button>
          <button className="border border-Gray-ext w-[40px] h-[40px] flex justify-center rounded-full">
            <a href="http://instagram.com">
              <img src=".\images\instagram-icon.svg" alt="instagram" className="w-[25px] mt-2" />
            </a>
          </button>
        </div>
        {/* --- end of social media link --- */}

        {/* --- copyright --- */}
        <div className="copyright flex justify-center mb-5">
          <img src=".\images\copyright_icon.svg" alt="copyright" className="w-[10px]" />
          <p className="text-sm font-thin text-Gray-ext">Copyright Ping. All rights reserved.</p>
        </div>
        {/* --- end of copyright --- */}
      </footer>
      {/* --- end of footer --- */}
    </div>
  );
}

export default App;
