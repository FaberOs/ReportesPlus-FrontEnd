import * as React from "react";

import Button from "../UI/Button.jsx";

export default function ConfirmModal() {
  return (
    <section className="flex flex-col pt-6 text-xl font-semibold max-w-[590px] text-blue-950">
      <article className="flex flex-col items-start px-14 pb-9 w-full bg-white shadow-sm rounded-[50px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e12a89a3168abdeb4e960b671d47fb4354b43924ffb826acab5bc9cf150955?apiKey=165ac61fa4b148a3a5c64ff4923956cb&"
          alt=""
          className="z-10 mt-0 aspect-square w-[51px]"
        />
        <h2 className="mt-11 font-bold max-md:mt-10 max-md:ml-1.5">Usuarios</h2>
        <p className="mt-9 max-md:ml-1.5">¿Seguro desea generar el usuario?</p>
        <div className="flex gap-5 self-end mt-7">
          <Button buttonText="No" />
          <Button buttonText="Si" />
        </div>
      </article>
    </section>
  );
}
