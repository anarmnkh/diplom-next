"use client";
import { Fragment, useState } from "react";

import Modal from "../../../components/Modal";
import RetirementAgeCalculator from "../../../components/RetirementAgeCalculator";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function home() {
  //const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      {!session ? (
        <>
          <div className="h-screen">
            <h1 className="text-center p-40 ">
              Please log in to access the dashboard.
            </h1>
          </div>
        </>
      ) : (
        <>
          <Fragment>
            <div className="p-20 h-screen  bg-gray-100 flex-row">
              <div className="">
                <RetirementAgeCalculator />
              </div>
              {/**<button className="mt-5" onClick={() => setShowModal(true)}>
          Өндөр насны тэтгэвэр
        </button>
        **/}
              <div className="text-center bg-gray-100 flex flex-col">
                <button
                  className="ml-3 mt-3"
                  onClick={() => setShowModal2(true)}
                >
                  Олон хүүхэд төрүүлж өсгөсөн эхийн тэтгэвэр
                </button>
                <button
                  className="ml-3 mt-3"
                  onClick={() => setShowModal3(true)}
                >
                  Хөдөлмөрийн хэвийн бус нөхцөлийн тэтгэвэр
                </button>
                <button
                  className="ml-3 mt-3"
                  onClick={() => setShowModal4(true)}
                >
                  Онцлог ажил мэргэжилийн тэтгэвэр
                </button>
                <button
                  className=" ml-3 mt-3"
                  onClick={() => setShowModal5(true)}
                >
                  Бусад нөхцөлийн тэтгэвэр
                </button>
              </div>
            </div>
            {/**  <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <RetirementAgeCalculator />
                  </Modal>**/}

            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Олон хүүхэд төрүүлж өсгөсөн эхийн тэтгэвэр
                </h3>
                <p className="text-xl font-normal text-gray-500">
                  Шимтгэл төлсөн байвал зохих хугацаа: 20 жил ба түүнээс дээш
                </p>
                <ul className="list-disc text-gray-700 pl-5 mt-4">
                  <li>Нас: эмэгтэй 50 нас хүрсэн даатгуулагч өөрөө хүсвэл</li>
                  <li>
                    4 ба түүнээс дээш хүүхэд төрүүлж, 3 хүртэл настайд нь үрчлэн
                    авч 6 нас хүртэл нь өсгөсөн.
                  </li>
                  <li>
                    Төрүүлж, өсгөсөн хүүхэд бүрийн тоогоор шимтгэл төлсөн
                    хугацааг 1 жил 6 сараар нэмэгдүүлэн тооцно. (Энэ зохицуулалт
                    нийгмийн даатгалын шимтгэлийг 10 ба түүнээс дээш жил төлсөн,
                    хүүхэдтэй бүх эхчүүдэд хамаарна)
                  </li>
                </ul>
              </div>
            </Modal>

            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Хөдөлмөрийн хэвийн бус нөхцөлийн тэтгэвэр
                </h3>
                <p>
                  Даатгуулагч нь нийтдээ 20-иос доошгүй жил, үүнээс доор дурдсан
                  хөдөлмөрийн хэвийн бус нөхцөлд ажиллаж шимтгэл төлсөн
                  тохиолдолд өөрөө хүсвэл тухайн насанд хүрээд өндөр насны
                  тэтгэвэр тогтоолгох эрхтэй. Үүнд
                </p>
                <table className="table-auto mt-4">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Хөдөлмөрийн нөхцөл</th>
                      <th className="px-4 py-2">Хүйс</th>
                      <th className="px-4 py-2">Нас</th>
                      <th className="px-4 py-2">
                        Тухайн хөдөлмөрийн нөхцөлд ажиллаж, шимтгэл төлсөн
                        байвал зохих хугацаа
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2" rowspan="2">
                        Газрын доор болон хөдөлмөрийн хортой, халуун нөхцөл
                      </td>
                      <td className="border px-4 py-2">Эрэгтэй</td>
                      <td className="border px-4 py-2">50</td>
                      <td className="border px-4 py-2">10 жил</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Эмэгтэй</td>
                      <td className="border px-4 py-2">45</td>
                      <td className="border px-4 py-2">7 жил 6 сар</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2" rowspan="2">
                        Хөдөлмөрийн хүнд нөхцөл
                      </td>
                      <td className="border px-4 py-2">Эрэгтэй</td>
                      <td className="border px-4 py-2">55</td>
                      <td className="border px-4 py-2">12 жил 6 сар</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Эмэгтэй</td>
                      <td className="border px-4 py-2">50</td>
                      <td className="border px-4 py-2">10 жил</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal>

            <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Онцлог ажил мэргэжилийн тэтгэвэр
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Доор дурдсан ажил мэргэжлээр 20-иос доошгүй жил, эсхүл нийтдээ
                  25-аас доошгүй жил үүнээс 15-аас доошгүй жил сонгодог,
                  мэргэжлийн урлагын байгууллагын тухайн ажил мэргэжлээр
                  ажилласан даатгуулагч өөрөө хүсвэл нас харгалзахгүйгээр өндөр
                  насны тэтгэвэр тогтоолгож болно.
                </p>
                <ul className="list-disc text-gray-700 leading-[5px] pl-5">
                  <li>Гоцлол дуучин</li>
                  <li>Бүжигчин</li>
                  <li>Агаарын болон хэрэглэлийн гимнастик</li>
                  <li>Акробат</li>
                  <li>Тэнцвэр</li>
                  <li>Уран нугаралт</li>
                  <li>Хүнд жингийн үзүүлбэрийн жүжигчин</li>
                  <li>Зэрлэг араатан</li>
                  <li>Ан амьтан сургаж тоглуулагч</li>
                  <li>Хөөмийчин</li>
                  <li>Найрал</li>
                  <li>Хөгжмийн үлээвэр хөгжимчин</li>
                </ul>
              </div>
            </Modal>

            <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Бусад нөхцөлийн тэтгэвэр
                </h3>
                <p>
                  Төмөр замын цэрэгжүүлсэн хамгаалалтын албанд 25-аас доошгүй
                  жил ажилласан даатгуулагч өөрөө хүсвэл нас харгалзахгүйгээр
                  өндөр насны тэтгэвэр тогтоолгож болно.
                </p>
              </div>
            </Modal>
          </Fragment>
        </>
      )}
    </div>
  );
}
