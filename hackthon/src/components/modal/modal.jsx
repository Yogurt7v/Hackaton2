export const Modal = () => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text} </h3>
        <div className="buttons">
          <Button>Да</Button>
          <Button>Отмена</Button>
        </div>
      </div>
    </div>
  );
};
