"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const eks = require("@pulumi/eks");

// Create an AWS resource (S3 Bucket)
const vpc = new aws.ec2.Vpc("eks-vpc", {
  cidrBlock: "10.0.0.0/16",
});

const cluster = new eks.Cluster("simple-cluster", {
  vpc: vpc.id,
});

// Export the name of the bucket
exports.clusterId = cluster.id;
