import { useState } from "react"

const useHooks = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleAddToCart = (service) => {
    const checkDuplicate = cart.some(duplicate => duplicate?.id === +service.id);
    
    if (!checkDuplicate) {
      const newCart = [...cart, service];
      setCart(newCart);
    } else {
      setShow(true);
    }
  };
  return {
    handleAddToCart,
    modal: [show, setShow],
    cartData: [cart, setCart]

  }
};

export default useHooks;