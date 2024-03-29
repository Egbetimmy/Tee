import html from '../Assets/svg/skills/html.svg'
import photoshop from '../Assets/svg/skills/photoshop.svg'
import docker from '../Assets/svg/skills/docker.svg'
import css from '../Assets/svg/skills/css.svg'
import angular from '../Assets/svg/skills/angular.svg'
import javascript from '../Assets/svg/skills/javascript.svg'
import nextJS from '../Assets/svg/skills/nextJS.svg'
import react from '../Assets/svg/skills/react.svg'
import typescript from '../Assets/svg/skills/typescript.svg'
import vue from '../Assets/svg/skills/vue.svg'
import bootstrap from '../Assets/svg/skills/bootstrap.svg'
import mongoDB from '../Assets/svg/skills/mongoDB.svg'
import mysql from '../Assets/svg/skills/mysql.svg'
import postgresql from '../Assets/svg/skills/postgresql.svg'
import tailwind from '../Assets/svg/skills/tailwind.svg'
import julia from '../Assets/svg/skills/julia.svg'
import php from '../Assets/svg/skills/php.svg'
import python from '../Assets/svg/skills/python.svg'
import aws from '../Assets/svg/skills/aws.svg'
import django from '../Assets/svg/skills/django.svg'
import firebase from '../Assets/svg/skills/firebase.svg'
import git from '../Assets/svg/skills/git.svg'
import graphql from '../Assets/svg/skills/graphql.svg'
import lightroom from '../Assets/svg/skills/lightroom.svg'
import nginx from '../Assets/svg/skills/nginx.svg'
import numpy from '../Assets/svg/skills/numpy.svg'
import opencv from '../Assets/svg/skills/opencv.svg'
import pytorch from '../Assets/svg/skills/pytorch.svg'
import tensorflow from '../Assets/svg/skills/tensorflow.svg'
import csharp from '../Assets/svg/skills/csharp.svg'

import azure from '../Assets/svg/skills/azure.svg'
import flutter from '../Assets/svg/skills/flutter.svg'
import microsoftoffice from '../Assets/svg/skills/microsoftoffice.svg'
import postman from '../Assets/svg/skills/postman.svg'
import nodejs from '../Assets/svg/skills/nodejs.svg'
import flask from '../Assets/svg/skills/flask.svg'


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
        case 'csharp':
            return csharp;
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