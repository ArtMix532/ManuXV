import { SectionTitle } from "./SectionTitle";

export function Location() {
  return (
    <div className="mt-4 md:grid md:grid-cols-5 md:grid-rows-5 md:justify-end">
      <div className="col-span-3 col-start-3 row-start-1 md:flex md:justify-end">
        <SectionTitle text="A festa" />
      </div>
      <div className="flex justify-center md:col-span-2 md:row-span-5 md:col-start-1 md:row-start-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6160598420306!2d-43.9945849!3d-19.856191900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69109da55788f%3A0x76814e3de59c6f49!2sAv.%20Otac%C3%ADlio%20Negr%C3%A3o%20de%20Lima%2C%206464%20-%20Bandeirantes%20(Pampulha)%2C%20Belo%20Horizonte%20-%20MG%2C%2031340-595!5e0!3m2!1spt-BR!2sbr!4v1738194937597!5m2!1spt-BR!2sbr"
          style={{ border: 0, width: "100%", height: "350px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="md:pl-40 md:col-span-3 md:row-span-4 md:col-start-3 md:row-start-2 md:text-right">
        <p className="font-lora text-gray-600 mt-4 ">
          Minha festa vai ser no dia 19 de junho de 2025, no espaço Miriam Rios
          Buffet. O endereço é Av. Otacílio Negrão de Lima, 6464- Bandeirantes.
          <br />
          <br />
          Acho importante lembrar a todos que estaremos em um mês frio, então
          levem roupas adequadas, sempre segundo o traje esporte fino, é claro.
          Mas não se preocupem, o espaço da festa é fechado e climatizado, vamos
          construir um clima bem aconchegante lá dentro.
          <br />
          <br />
          Para te ajudar a se programar no trajeto, essa página conta com um
          link para o Google Maps, acesse para se localizar.
        </p>
      </div>
    </div>
  );
}
