import { Meteor } from 'meteor/meteor';
import './routes.jsx';
import '../both.js';

Meteor.startup(function () {
  TimeSync.loggingEnabled = false;
});