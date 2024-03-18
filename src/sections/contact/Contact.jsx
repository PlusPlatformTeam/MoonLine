import React from "react";
import { useForm } from "react-hook-form"
import "./contact.css";
import Btn from "../../assets/images/btn-send-text.png";
import BtnLtr from "../../assets/images/btn-send-text-ltr.png";
import api from "../../services/ContactUsApi";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { setCookie, getCookie } from "../../utility/util";

const Contact = () => {

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
        await api.get('/send-message', {
          params: data
        });
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
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        input.value = '';
      });

      
    } catch (error) {
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
    }
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
              <div className="relative flex cursor-pointer float w-36 hover:scale-x-90">
                <button onClick={handleSubmit(onSubmit)} type="button">
                  <img src={direction === "rtl" ? Btn : BtnLtr} alt="btn" className="w-full h-12 " />
                </button>
                <h1 className={`text-white font-bold  ${direction === "rtl" ? "rtl-btn-position text-lg" : "ltr-btn-position text-2xl"}`}>{t("contact.send")}</h1>
                <button type="button">
                  <span>{t("contact.send")}</span>
                  <i></i>
                </button>
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
