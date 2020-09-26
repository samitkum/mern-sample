import React, { useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import { get_tasks, delete_task } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  listItem: {
    transition: "all 250ms",
    backgroundColor: "#dfdfdf",
    "&:hover": {
      backgroundColor: "#838383",
      cursor: "pointer",
    },
  },
  delete: {
    color: "tomato",
  },
}));
const ListContainer = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state);
  const classes = useStyles();
  useEffect(() => {
    dispatch(get_tasks());
  }, []);
  if (loading) {
    return <h1>Loading...!!</h1>;
  }
  if (tasks?.length === 0) {
    return <h1>No Task Pending</h1>;
  }
  return (
    <List className={classes.listContainer}>
      {tasks?.map(({ _id, task, date }) => (
        <ListItem key={_id} className={classes.listItem}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={task}
            secondary={new Date(date).toLocaleDateString()}
          />
          <IconButton onClick={() => dispatch(delete_task(_id))}>
            <CancelIcon className={classes.delete} />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListContainer;
