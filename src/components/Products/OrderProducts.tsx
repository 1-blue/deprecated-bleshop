import Link from "next/link";
import { useRecoilValue } from "recoil";

// state
import stateService from "@src/states";

// util
import {
  addSeparatorToPhone,
  dateOrTimeFormat,
  numberWithComma,
} from "@src/libs";

// component
import Support from "@src/components/common/Support";
import Photo from "@src/components/common/Photo";

const OrderProducts = () => {
  const orderList = useRecoilValue(stateService.orderService.orderListState);

  return (
    <>
      {orderList.length === 0 ? (
        <Support.Error text="조건에 맞는 상품이 없습니다." />
      ) : (
        <ul>
          {orderList.map((order) => (
            <li key={order.idx}>
              <Link href={`/product/${order.productIdx}`}>
                <a className="p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-500">
                  <Photo
                    path={order.Product.photo}
                    cover
                    className="flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <span className="font-bolder sm:text-lg">
                        {order.Product.name}
                      </span>
                      <span className="text-[8px] sm:text-xs font-bold">
                        {dateOrTimeFormat(
                          order.updatedAt,
                          "YYYY-MM-DD-hh-mm-ss"
                        )}
                      </span>
                    </div>

                    <div className="flex-1" />

                    {/* 결제 정보 */}
                    <ul>
                      <li className="flex justify-between">
                        <span className="text-sm sm:text-base font-bold">
                          결제 방법
                        </span>
                        <span className="text-sm sm:text-base">
                          {order.provider}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-sm sm:text-base font-bold">
                          상품 가격
                        </span>
                        <span className="text-sm sm:text-base">
                          {numberWithComma(order.amount / order.quantity)}원
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-sm sm:text-base font-bold">
                          구매 개수
                        </span>
                        <span className="text-sm sm:text-base">
                          {order.quantity}개
                        </span>
                      </li>

                      <hr className="my-1" />
                      <li className="flex justify-between font-bold">
                        <span className="text-sm sm:text-base">
                          총 결제금액
                        </span>
                        <span className="text-sm sm:text-base">
                          {numberWithComma(order.amount)}원
                        </span>
                      </li>
                    </ul>
                  </div>
                </a>
              </Link>

              {/* 배송지 정보 */}
              <ul className="p-2">
                <li className="mb-1 sm:mb-2">
                  <span className="font-bolder sm:text-lg">배송지 정보</span>
                </li>
                <li>
                  <span className="text-sm sm:text-base font-bold">
                    {order.name}
                  </span>
                </li>
                <li>
                  <span className="text-sm sm:text-base">{order.address}</span>
                </li>
                <li>
                  <span className="text-sm sm:text-base">
                    {order.residence}
                  </span>
                </li>
                <li>
                  <span className="text-sm sm:text-base">
                    {addSeparatorToPhone(order.phone)}
                  </span>
                </li>
                <hr className="my-1" />
                <li>
                  <span className="text-sm sm:text-base">
                    배송 요청 사항: {order.message}
                  </span>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default OrderProducts;
