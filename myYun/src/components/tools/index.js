import {Tag} from "antd";
import React from "react";

export default function setStatus(val) {
    switch (val) {
        case 0 :
            return <Tag color="blue">待发货</Tag>
        case 1 :
            return  <Tag color="geekblue">运输中</Tag>
        case 2 :
            return  <Tag color="green">已送达</Tag>
        case 3 :
            return  <Tag color="orange">退款中</Tag>
        case 4 :
            return  <Tag color="volcano">已退款</Tag>
        case 5 :
            return  <Tag>退款失败</Tag>
    }
}