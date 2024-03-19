import React, { useState } from "react";
import { useForm } from "react-hook-form"
import "./contact.css";
import api from "../../services/ContactUsApi";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { setCookie, getCookie } from "../../utility/util";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (!getCookie('sentMessage')) {
        setLoading(true);
        api.get('/send-message', {
          params: data
        })
          .then(function (response) {
            setCookie('sentMessage', 'true', 1);

            toast.success(t('contact.successMessage'), {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach((input) => {
              input.value = '';
            });
          })
          .catch(function (error) {
            toast.error(t('contact.errorMessage'), {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .finally(function () {
            setLoading(false);
          });
      }
      else {
        toast.warning(t('contact.warningMessage'), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    } catch (error) { }
  };


  return (
    <section
      id="contact"
      className="flex justify-center w-full text-center section gradiant-top-light"
    >
      <div className="w-full p-4 lg:w-9/12 lg:p-16 ">
        <div data-aos={`fade-down`} data-aos-duration={1000}>
          <h1 className="text-3xl font-bold text-white">{t("contact.title")}</h1>
          <h1 className="my-5 text-lg font-normal leading-10 text-white">
            {t("contact.desc.we")}{" "}
            <span className="blue-base-color">{t("contact.desc.you")}</span>{" "}
            {t("contact.desc.choose-you")}
            <br className="mt-1" />
            {t("contact.desc.contact-us")}{" "}
          </h1>
        </div>


        <div data-aos={`fade-down`} data-aos-duration={1000}>

          <div className="mb-6">
            <input
              type="text"
              placeholder={t("contact.name")}
              className={`block w-full p-4 text-gray-200 input-bg rounded-xl focus:border-blue-900 ${errors.name && 'border-2 border-red-500'}`}
              {...register('name', {
                required: t('formValidation.contactUs.name')
              })}
            />
            {errors.name && (<p className="px-3 mt-2 text-red-500 text-start"> {errors.name?.message} </p>)}
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder={t("contact.mobile")}
              className={`block w-full p-4 text-gray-200 input-bg rounded-xl focus:border-blue-900 ${errors.mobile && 'border-2 border-red-500'}`}
              {...register('mobile', {
                required: t('formValidation.contactUs.mobileRequired'),
                pattern: /^(989|09)\d{9}$/
              })}
            />
            {
              errors.mobile && errors.mobile.type !== 'required' && (
                <p className="px-3 mt-2 text-red-500 text-start">
                  {t('formValidation.contactUs.mobileInvalid')}
                </p>
              )
            }
            {
              errors.mobile && errors.mobile.type === 'required' && (
                <p className="px-3 mt-2 text-red-500 text-start">
                  {errors.mobile?.message}
                </p>
              )
            }
          </div>

          <div className="relative mb-6">
            <textarea
              placeholder={t("contact.message")}
              className={`block w-full p-4 text-gray-200 input-bg rounded-xl focus:border-blue-900 ${errors.message && 'border-2 border-red-500'}`}
              rows="8"
              {...register('message', {
                required: t('formValidation.contactUs.message')
              })}
            ></textarea>
            {errors.message && (<p className="px-3 mt-2 text-red-500 text-start"> {errors.message?.message} </p>)}
            <div className="absolute flex justify-center w-full text-center -bottom-5 ">
              <div className="relative flex cursor-pointer float">
                {!loading ? (<button className="flex items-center text-white" onClick={handleSubmit(onSubmit)} type="button">
                  <span className={`h-full flex px-4 py-2 justify-center items-center bg-cyan-600 ${direction === "ltr" ? 'rounded-l-2xl' : 'rounded-r-2xl'}`}>{t("contact.send")}</span>
                  <span className={`flex p-2 justify-center items-center text-3xl h-ful bg-cyan-500 ${direction === "ltr" ? 'rounded-e-2xl' : 'rounded-l-2xl'}`}>
                    {direction === "ltr" ? <IoIosArrowForward /> : <IoIosArrowBack />}
                  </span>
                </button>
                ) : (<button type="button" class="bg-cyan-500 py-2 cursor-progress text-white flex justify-between items-center gap-4 rounded-2xl px-5" disabled>
                  {t('contact.processing')}
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </button>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={direction === 'rtl'}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Contact;
