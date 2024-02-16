// eslint-disable-next-line react/prop-types
function Card({name = "Pankaj", about = "Software Develpoer", imageSrc=""}) {
    
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={imageSrc }
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
             {about}
            </p>
          </blockquote>
          <figcaption>
            <div>{name}</div>
            <div>Ninja Warrior, Leaf Village</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Card;
