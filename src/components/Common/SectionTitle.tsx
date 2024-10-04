const SectionTitle = ({
  title,
  description,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "",
  paragraphClassName = "", // This can be optional now
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h1
          className={`
            mb-4 
            w-full
            font-bold 
            !leading-tight 
            text-black 
            dark:text-white 
            sm:text-4xl
            md:text-4xl
            lg:text-4xl
            xl:text-4xl
            ${titleClassName}`
          }
        >
          {title}
        </h1>
        {/* Render description only if it's provided */}
        {description && ( 
          <h2
            className="
            mb-4 
            text-xl 
            font-bold 
            text-black 
            dark:text-white 
            sm:text-xl
            md:text-xl
            lg:text-xl
            xl:text-xl
            font-anka-coder"
          >
            {description}
          </h2>
        )}
        <p 
          className={`
            w-full
            text-base 
            font-normal 
            !leading-relaxed 
            text-body-color 
            sm:text-lg
            md:text-lg
            lg:text-lg
            xl:text-lg
            ${paragraphClassName}`
          }
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
