import React from "react";
import {useParams} from "react-router-dom";
import ReadLink from "../components/ReadHtml";

const News = () => {
    const {newsId} = useParams();
    const link = "https://baotintuc.vn" + newsId;
    return (
        <div>
            <ReadLink linkHtml={link}></ReadLink>
        </div>
    );
};

export default News;