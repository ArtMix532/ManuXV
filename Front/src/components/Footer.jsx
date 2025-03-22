import { Instagram, Github, Linkedin, Mail } from "lucide-react";

function footer() {
  return (
    <footer className="bg-ManuRoxoFooter px-4 md:px-16 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
        <div className="">
          <h2 className="text-lg font-bold mb-4 text-slate-200">About Us</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            dolores alias quibusdam harum, sed suscipit perferendis et possimus
            officiis explicabo ab deleniti incidunt provident dignissimos.
            Quidem saepe temporibus eos veniam!
          </p>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-4 text-slate-200">Quick Links</h2>
          <ul>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                About{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-4 text-slate-200">Follow Us</h2>
          <div className="flex gap-2">
            <a href="" className="text-gray-300">
              <Instagram />
            </a>
            <a href="" className="text-gray-300">
              {" "}
              <Github />
            </a>
            <a href="" className="text-gray-300">
              {" "}
              <Linkedin />
            </a>
            <a href="" className="text-gray-300">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 p-4 text-gray-300 mt-2">
        <p className="text-center">
          © 2025 Code With{" "}
          <a href="" className="hover:underline">
            Davi Benjamim
          </a>{" "}
          All Rigths Reserved
        </p>
      </div>
    </footer>
  );
}

export default footer;
