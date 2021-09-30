import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss'

interface Message {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface ContactModalProps {
  isOpenContact: boolean;
  onRequestClose: () => void;
}

export function ContactModal({ isOpenContact, onRequestClose }: ContactModalProps) {
  const { register, handleSubmit, reset } = useForm();


  async function handleSubmitFormContact(data: Message) {
    reset();
    onRequestClose()
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
      <form onSubmit={handleSubmit(handleSubmitFormContact)} className={styles.container}>
        <h2>Contact</h2>
        <label>Name</label>
        <input
          type="text"
          placeholder="Fill your full name"
          {...register('name')}
        />
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Fill a valid e-mail"
          {...register('email')}
        />
        <label>Phone</label>
        <input
          type="phone"
          placeholder="Fill your phone"
          {...register('phone')}
        />
        <label>Post</label>
        <textarea
          placeholder="Hello..."
          {...register('message')}
        />

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