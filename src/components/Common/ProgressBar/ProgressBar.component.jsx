import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProgressBar.css';

const ProgressBar = () => (
  <div className="progress-bar">
    <CircularProgress size={100} />
  </div>
)
 
export default ProgressBar;
