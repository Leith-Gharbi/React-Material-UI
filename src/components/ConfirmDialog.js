import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Controls from './controls/controls';
import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone';
const useStyles = makeStyles((theme) => ({
  dialog: {
    position: 'absolute',
    padding: theme.spacing(2),
    top: theme.spacing(5),
  },
  dialogContent: {
    textAlign: 'center',
    textAlign: 'center',
  },
  dialogAction: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  dialogTitle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    },
  },
}));
export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();
  return (
    <Dialog
      classes={{ papper: classes.dialogContent }}
      open={confirmDialog.isOpen}
    >
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <WarningTwoToneIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogAction}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Controls.Button
          text="No"
          color="default"
          onClick={() => {
            setConfirmDialog({ ...confirmDialog, isOpen: false });
          }}
        />
        <Controls.Button
          text="Yes"
          color="secondary"
          onClick={confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
}
