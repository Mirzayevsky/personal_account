import {Spin} from "antd";
import {LoaderWrapper} from "./styles";

const Loader = () => {
    return (
        <LoaderWrapper>
            <Spin className={'spinner'} tip="Loading..."/>
        </LoaderWrapper>

    )
};

export default Loader;