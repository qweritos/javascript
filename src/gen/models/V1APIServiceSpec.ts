/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiregistrationV1ServiceReference } from '../models/ApiregistrationV1ServiceReference';
import { HttpFile } from '../http/http';

/**
* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
*/
export class V1APIServiceSpec {
    /**
    * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
    */
    'caBundle'?: string;
    /**
    * Group is the API group name this server hosts
    */
    'group'?: string;
    /**
    * GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
    */
    'groupPriorityMinimum': number;
    /**
    * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
    */
    'insecureSkipTLSVerify'?: boolean;
    'service'?: ApiregistrationV1ServiceReference;
    /**
    * Version is the API version this server hosts.  For example, \"v1\"
    */
    'version'?: string;
    /**
    * VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
    */
    'versionPriority': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "caBundle",
            "baseName": "caBundle",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupPriorityMinimum",
            "baseName": "groupPriorityMinimum",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "insecureSkipTLSVerify",
            "baseName": "insecureSkipTLSVerify",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "ApiregistrationV1ServiceReference",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionPriority",
            "baseName": "versionPriority",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1APIServiceSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

