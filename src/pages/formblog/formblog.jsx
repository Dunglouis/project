import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Quote } from "../../components/quote";
import "./formblog.css";
import StoreContext from "../../db/context";
import axios from "axios";
import { useAuth } from "../../context/authContext/index";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const FormBlog = () => {
  const { targetBlog } = useContext(StoreContext);
  const { userLoggedIn } = useAuth();
  const [dataBlog, setDataBlog] = useState(null);

  useEffect(() => {
    const getBlogData = async () => {
      if (!targetBlog) {
        console.log("targetBlog is not set yet");
        return;
      }

      NProgress.start();
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BACKEND_URL}/blog`
        );
        const foundBlog = res.data.data.find((item) => item._id === targetBlog);
        setDataBlog(foundBlog);
      } catch (error) {
        console.log(error);
      } finally {
        NProgress.done(); // Đảm bảo rằng NProgress luôn dừng lại
      }
    };

    getBlogData();
  }, [targetBlog]);

  if (!dataBlog) {
    return (
      <div className="loader__wrap">
        <div className="loader"></div>
        <div className="loader-text">Loading..</div>
      </div>
    );
  }

  return (
    <div key={dataBlog._id}>
      <div className="container">
        <div className="breadcrumb">
          <div className="breadcrumb__wrap">
            <NavLink to="/home" className="breadcrumb__item">
              <p className="breadcrumb__name">Trang chủ</p>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
                alt=""
                className="breadcrumb__icon-arrow"
              />
            </NavLink>
            <NavLink to="/blog" className="breadcrumb__item">
              <p className="breadcrumb__name">Blog</p>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
                alt=""
                className="breadcrumb__icon-arrow"
              />
            </NavLink>
            <NavLink to="#!" className="breadcrumb__item">
              <p className="breadcrumb__name breadcrumb__active">
                {dataBlog.title}
              </p>
            </NavLink>
          </div>
        </div>
        <div className="blog">
          <div className="row">
            <div className="col-9 col-lg-12">
              <div className="container">
                <h1 className="blog__heading">{dataBlog.title}</h1>
                <p className="blog__desc">
                  Viết bởi {dataBlog.author} - {dataBlog.duration} phút đọc
                </p>
                <div dangerouslySetInnerHTML={{ __html: dataBlog.content }} />
                <div className="blog__action">
                  {userLoggedIn ? (
                    <button className="btn blog__action-btn">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/practice.svg`}
                        alt=""
                        className="blog__icon blog__icon--animation"
                      />
                      Nhận thưởng
                    </button>
                  ) : (
                    <button className="btn blog__action-btn">
                      <NavLink to="/login">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/practice.svg`}
                          alt=""
                          className="blog__icon blog__icon--animation"
                        />
                        Đăng nhập để nhận thưởng
                      </NavLink>
                    </button>
                  )}
                </div>
                <h2 className="blog__title">Bình luận</h2>

                <div className="blog__comment">
                  <div className="blog__user--comment">
                    <div className="blog__user--info">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                        alt=""
                        className="blog__user--avatar"
                      />
                      <p className="blog__user--name">Truong Tuan Anh</p>
                      <p className="blog__time--comment">5 tháng trước</p>
                    </div>
                    <div className="blog__response">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/reply.svg`}
                        alt=""
                        className="blog__icon "
                      />
                      <button className="blog__response--btn">Phản hồi</button>
                    </div>
                  </div>
                  <p className="blog__reply">Thanks</p>
                </div>
                <form className="blog__form">
                  <div className="blog__user--comment">
                    <div className="blog__user--info">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                        alt=""
                        className="blog__user--avatar"
                      />
                      <p className="blog__user--name d-none d-md-block">
                        Truong Tuan Anh
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="Nhập bình luận ..."
                      className="blog__input"
                    />
                    <button className="blog__submit">Gửi</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-3 col-lg-12">
              <Quote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
