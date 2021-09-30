import Modal from 'react-modal';
import styles from './styles.module.scss'

interface ContactModalProps {
  isOpenContact: boolean;
  onRequestClose: () => void;
}

export function ContactModal({ isOpenContact, onRequestClose }: ContactModalProps) {

  async function handleSubmitFormContact() {
    return;
  }

  return (
    <Modal
      isOpen={isOpenContact}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src="/images/close.svg" alt="Close modal" />
      </button>
      <form onSubmit={handleSubmitFormContact} className={styles.container}>
        <h2>Contact</h2>
        <label>Name</label>
        <input type="text" placeholder="Fill your full name" />
        <label>E-mail</label>
        <input type="text" placeholder="Fill a valid e-mail" />
        <label>Phone</label>
        <input type="text" placeholder="Fill your phone" />
        <label>Post</label>
        <textarea placeholder="Hello..." />

        <div className={styles.submit}>
          <button type="submit">
            <img src="/images/send.svg" alt="Send contact message" />
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}