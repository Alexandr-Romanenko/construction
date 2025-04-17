import { useEffect, useState, useCallback } from "react";
import "./mainblock.css";
import mainImg from "../../img/pictures/main_pict.png";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import FormDiscussion from "../forms/formDiscussion/FormDiscussion";

export default function MainBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <section>
      <div className="container">
        <div className="main-block-container">
          <div className="section-title">
            <h1 className="main-block-header">
              Lorem ipsum and <br /> consectetur adipisc elit
            </h1>
          </div>

          <Modal open={isModalOpen} className="modal-form-discussion">
            <Button
              className="btn btn-close-modal"
              type="button"
              onClick={() => setIsModalOpen(false)}
            >
              x
            </Button>

            <h3 className="modal-header">Get a free quote</h3>
            <div className="contact-form">
              <FormDiscussion />
            </div>
          </Modal>

          <div className="main-section-img">
            <p className="main-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae sem urna. Pellentesque molestie risus eu vestibulum semper.
            </p>

            <div>
              <Button
                className="btn btn-mainblock"
                type="button"
                onClick={openModal}
              >
                Get a free quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
