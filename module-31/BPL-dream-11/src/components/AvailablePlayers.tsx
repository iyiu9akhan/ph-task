import Container from "./Container";

function AvailablePlayers() {
  return (
    <>
      <Container>
        <div className="mb-50">
          <div className="flex justify-between  items-center mb-8">
            <p className="capitalize font-primary font-bold text-[28px] text-[#131313]">
              available players
            </p>
            <div className="capitalize flex items-center border border-[#131313]/10 rounded-xl">
              <div className="available bg-[#E7FE29] rounded-l-[11px] cursor-pointer">
                <p className="font-bold font-primary text-[16px] px-7.5 py-3.5">
                  available
                </p>
              </div>
              <div className="available rounded-r-[11px] cursor-pointer">
                <p className="font-primary text-[16px] px-7.5 py-3.5 text-[#131313]/60">
                  selected (0)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-lg rounded-2xl border border-[#131313]/10">
              <figure className="p-6">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-2xl h-60"
                />
              </figure>
              <div className="card-body pt-0">
                <h2 className="card-title">
                  Card Title
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg rounded-2xl border border-[#131313]/10">
              <figure className="p-6">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-2xl h-60"
                />
              </figure>
              <div className="card-body pt-0">
                <h2 className="card-title">
                  Card Title
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg rounded-2xl border border-[#131313]/10">
              <figure className="p-6">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-2xl h-60"
                />
              </figure>
              <div className="card-body pt-0">
                <h2 className="card-title">
                  Card Title
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AvailablePlayers;
