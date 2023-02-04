import { Button, Card, Text } from "@nextui-org/react";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import useCommonStore from "../../Store/store";

export const ChooseProduct = () => {
  const setSteps = useCommonStore((state) => state.setSteps);

  return (
    <>
      <Card variant="bordered" css={{ marginTop: "$20", padding: "$4" }}>
        <Card.Body>
          <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
            Choose the Product<span className="text-gray-400 ml-2 ">(Step 2 of 4)</span>
          </Text>

          <div className="product_categories p-3  pl-0 grid grid-cols-3 gap-3">
            {[
              Array.from(new Array(6).keys()).map((item, index) => (
                <Card key={index} isPressable isHoverable variant="bordered">
                  <Card.Body>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-[40px] h-[40px]">
                          <img
                            src="https://picsum.photos/200/300"
                            className="h-full w-full rounded-md"
                            alt="img"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <h6 className="text-black font-bold">Bluberry cake with raw toppings</h6>
                          <p className="text-gray-400 text-sm">Rs : 2290</p>
                        </div>
                      </div>
                      <AiOutlineCheckCircle />
                    </div>
                  </Card.Body>
                </Card>
              )),
            ]}
          </div>
        </Card.Body>
      </Card>
      <div className="flex justify-end mt-3">
        <Button onPress={setSteps}>Continue</Button>
      </div>
    </>
  );
};
