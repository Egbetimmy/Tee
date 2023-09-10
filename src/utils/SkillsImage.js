import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import docker from '../assets/svg/skills/docker.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import julia from '../assets/svg/skills/julia.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import aws from '../assets/svg/skills/aws.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import lightroom from '../assets/svg/skills/lightroom.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import pytorch from '../assets/svg/skills/pytorch.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'

import azure from '../assets/svg/skills/azure.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import postman from '../assets/svg/skills/postman.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import flask from '../assets/svg/skills/flask.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'flask':
            return flask;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'nodejs':
            return nodejs;
        case 'postman':
            return postman;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'julia':
            return julia;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'pytorch':
            return pytorch;
        case 'tensorflow':
            return tensorflow;
        case 'azure':
            return azure;
        case 'flutter':
            return flutter;
        case 'microsoft office':
            return microsoftoffice;
        default:
            break;
    }
}