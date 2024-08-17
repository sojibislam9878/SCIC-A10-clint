import PropTypes from "prop-types";
const AllItemsCard = ({ item }) => {
  const {
    // _id,
    brand,
    category,
    createdAt,
    description,
    image,
    name,
    price,
    ratings,
  } = item || {};

  const dateObj = new Date(createdAt);

  const date = dateObj.toISOString().split("T")[0];
  const hours = dateObj.getUTCHours().toString().padStart(2, "0");
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, "0");

  const time = `${hours}:${minutes}`;

  const oldPrice = parseInt(price) + 6.99;

  const slicedOldPrice = parseFloat(oldPrice.toString().slice(0, 5));

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-[31rem] w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4 font-play bg-gradient-to-r from-[#1ABC9C] to-[#62e6cb] bg-clip-text text-transparent">
            {name}
          </h2>
          <p className="text-lg">{description}</p>
          <p className="text-lg font-medium">Category: {category}</p>
          <p className="text-lg font-medium">Brand: {brand}</p>
          <p className="flex gap-6 text-lg font-medium">
            Price: $ {price}
            <span className="text-red-400">
              <del>$ {slicedOldPrice}</del>
            </span>
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold flex gap-2 items-center">
              Rating: {ratings}{" "}
              <span className="material-symbols-outlined">star_half</span>
            </p>
            <p>
              Date: {date} Time:{time}
            </p>
          </div>
          <div className="card-actions flex gap-8 mt-4">
            <button className="btn btn-outline border-[#1ABC9C] hover:border-[#1ABC9C] text-[#1ABC9C] hover:bg-[#1ABC9C]">
              Add To Cart
            </button>
            <button className="btn bg-[#1ABC9C]  text-white  hover:bg-transparent hover:border-[#1ABC9C] hover:text-[#1ABC9C]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
AllItemsCard.propTypes = {
  item: PropTypes.object,
};
export default AllItemsCard;
