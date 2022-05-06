
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import protoLoader from '@grpc/proto-loader';
import grpc from '@grpc/grpc-js'


const packageDef = protoLoader.loadSync("../Api/auth.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);

const authPackage = grpcObject.authPackage;

const server = new grpc.Server()
server.addService(authPackage.Login.service, {
	"validateToken": validateToken,
	"createSession": createSession
});
server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(), () => {
	server.start();
});




function validateToken(call, callback) {
	console.log(call)
}

function createSession(call, callback) {
	console.log(call)
}
