import React from 'react';
import { pricePlan } from '../CustomComponent-Data/PricePlan';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import Popper from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';





const ContainerBox = styled(props => <Box {...props} />)(({ theme }) => ({
    paddingTop: "2rem",
    ".box-container": {
        display: "none"
    },
    ".box-container.active": {
        display: "block"
    },
    ".toggleIcon": {
        cursor: "pointer"
    }

}))

const ContainerChildBox = styled(props => <Box {...props} />)(({ theme }) => ({
    backgroundColor: "#293042",
    padding: "2rem",
    borderRadius: "0.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    ".htmltext-area": {
        color: "#ccc",
        backgroundColor: "#293042",
        padding: "1rem",
        border: "none"
    },
    ".textfield": {
        border: "1px solid #ccc"
    },
    ".MuiSvgIcon-root": {
        color: "#fff",
        opacity: "0.6",
        margin: "0.5rem",
        display: "flex",
    }
}))



const CodeContainer = (props) => {
    const { data } = props;
    const [label,setLabel]=React.useState("copy");
    const copyhandleText = async (e) => {
        setLabel("copied")
        let htmlText = e.target.parentElement;
        let copy = htmlText.getElementsByTagName("textarea");
        await navigator.clipboard.writeText(copy[0]?.defaultValue)
    }
   const resetText = () => {
       setLabel("copy")
      };
    const text = document.querySelector("#text1")
    let dataArray = data.split("<style>");
    let cssText = dataArray[1].replace("</style>", "")
    return <ContainerChildBox>
        <Box className='textfield'>
            <Tooltip title={label} onMouseLeave={resetText} delay={0} onClick={(e) => copyhandleText(e)}>
                <ContentCopyIcon/>
            </Tooltip>
            <TextareaAutosize
                maxRows={15}
                defaultValue={dataArray[0]}
                style={{ width: 450 }}
                className="htmltext-area"
                readOnly
            />
        </Box>
        <Box className='textfield'>
            <Tooltip title={label} onMouseLeave={resetText} delay={0} onClick={(e) => copyhandleText(e)}>
                <ContentCopyIcon />
            </Tooltip>
            <TextareaAutosize
                maxRows={15}
                defaultValue={cssText}
                style={{ width: 450 }}
                className="htmltext-area"
                readOnly
            />
        </Box>
    </ContainerChildBox >
}


function PricePlan(props) {
    const [show, setShow] = React.useState(false)
    const handleIframe = () => {
        let a = document.querySelectorAll("iframe");
        a[2].style.height = "30rem";
    }
    const handleClick = (e) => {
        e.target.parentElement?.parentElement?.nextElementSibling?.classList?.toggle("active");
    }
    let styles = `<link href="https://refrance.s3.ap-south-1.amazonaws.com/style.css" rel="stylesheet" type="text/css"/>`
    return (
        <ContainerBox>
            {
                pricePlan.map((item, i) =>
                    <>
                        <Card sx={{ padding: "1rem", textAlign: "center", position: "relative" }} className="mt-2" key={i}>
                            <iframe srcDoc={item + styles} onLoad={handleIframe} className="mt-1" style={{ width: "40rem", border: "none", height: "18rem" }}
                                sandbox
                            ></iframe>
                            <Box sx={{ textAlign: "right" }} key={i}>
                                <CodeIcon className="toggleIcon" onClick={(e) => handleClick(e)} />
                            </Box>
                        </Card>
                        <Box key={i} className="box-container" mt={2}>
                            <CodeContainer data={item} />
                        </Box>
                    </>
                )
            }
        </ContainerBox>
    );
}

export default PricePlan;