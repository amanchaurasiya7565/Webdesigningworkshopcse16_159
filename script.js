const { useState, useEffect } = React;

function App() {

  const foodApi =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

  const logoImg =
    "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png";

  const cartIconImg =
    "https://cdn-icons-png.flaticon.com/512/833/833314.png";

  const footerIconImg =
    "https://cdn-icons-png.flaticon.com/512/1046/1046857.png";

  const [showCartPage, setShowCartPage] = useState(false);

  const [foods, setFoods] = useState([]);

  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(foodApi)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
      });
  }, []);

  const addToCart = (food) => {

    const itemExist = cart.find(
      (item) => item.idMeal === food.idMeal
    );

    if (itemExist) {

      const updatedCart = cart.map((item) =>
        item.idMeal === food.idMeal
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([...cart, { ...food, qty: 1 }]);

    }
  };

  const increaseQty = (id) => {

    const updatedCart = cart.map((item) =>
      item.idMeal === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCart(updatedCart);
  };

  const decreaseQty = (id) => {

    const updatedCart = cart.map((item) =>
      item.idMeal === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    setCart(updatedCart);
  };

  const removeItem = (id) => {

    const updatedCart = cart.filter(
      (item) => item.idMeal !== id
    );

    setCart(updatedCart);
  };

  const filteredFoods = foods.filter((food) =>
    food.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  const Header = () => {

    return (

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#fc8019",
        }}
      >

        <div>
          <img
            src={logoImg}
            width="80"
          />
        </div>

        <input
          placeholder="Enter Veggies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
          }}
        />

        <div
          id="cart"
          onClick={() => setShowCartPage(!showCartPage)}
          style={{
            cursor: "pointer",
            position: "relative",
          }}
        >

          <img
            src={cartIconImg}
            width="40"
          />

          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "3px 8px",
            }}
          >
            {cart.length}
          </span>

        </div>

      </div>
    );
  };

  const Main = () => {

    return (

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >

        {filteredFoods.map((food) => (

          <div
            key={food.idMeal}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
            }}
          >

            <img
              src={food.strMealThumb}
              width="100%"
              height="200"
            />

            <h3>{food.strMeal}</h3>

            <button
              onClick={() => addToCart(food)}
              style={{
                padding: "10px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add To Cart
            </button>

          </div>

        ))}

      </div>
    );
  };

  const Footer = () => {

    return (

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#222",
          color: "white",
        }}
      >

        <img
          src={footerIconImg}
          width="50"
        />

        <h2>Food Ordering App</h2>

      </div>
    );
  };

  const CartPage = () => {

    return (

      <div style={{ padding: "20px" }}>

        <h1>Cart Page</h1>

        {cart.length === 0 ? (
          <h2>Cart Empty</h2>
        ) : (

          cart.map((item) => (

            <div
              key={item.idMeal}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >

              <img
                src={item.strMealThumb}
                width="120"
              />

              <div>

                <h3>{item.strMeal}</h3>

                <h4>Quantity : {item.qty}</h4>

                <button
                  onClick={() => increaseQty(item.idMeal)}
                >
                  +
                </button>

                <button
                  onClick={() => decreaseQty(item.idMeal)}
                >
                  -
                </button>

                <button
                  onClick={() => removeItem(item.idMeal)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))

        )}

      </div>
    );
  };

  return (

    <div>

      <Header />

      {showCartPage ? <CartPage /> : <Main />}

      <Footer />

    </div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));