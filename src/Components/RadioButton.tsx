
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';

const CustomRadio = withStyles((theme) => ({
    root: {
        color: theme.palette.customColors?.lightPurple,
        '&$checked': {
            color: theme.palette.customColors?.lightPurple,
            "& > span:nth-child(1) > div  > svg:nth-child(1)  ": {
                transform: ' scale(1.2)'
            },
            "& > span:nth-child(1) > div  > svg:nth-child(2)  ": {
                transform: ' scale(1.8)'
            },
            // This is for text
            "& + span ": {
                // color: theme.palette.customColors?.purple,
            }
        },
        "& > span:nth-child(1) > div  > svg:nth-child(2)  ": {
            fill: theme.palette.customColors?.lightPurple,
            transform: ' scale(2.2)'
        },
        // This is for text
        "& + span ": {
            // color: theme.palette.customColors?.lightPurple,
        }
    },
    checked: {
        "& > span:nth-child(1) > div  > svg:nth-child(2)  ": {
            fill: theme.palette.customColors?.purple,
            transform: ' scale(1)'
        }
    },
}))((props: RadioProps) => <Radio color="default" {...props} />);

export default CustomRadio