import { Modal, ModalBody,  ModalHeader } from "reactstrap";

const Home = props => {
    const {items}=props;
  return (
    <div>
      <Modal size="lg" isOpen>
        <ModalHeader></ModalHeader>
        <ModalBody>
        {items.map((b)=><p>{b}</p>)}
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Home;
