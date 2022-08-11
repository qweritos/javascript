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

import { V1StatefulSetCondition } from '../models/V1StatefulSetCondition';
import { HttpFile } from '../http/http';

/**
* StatefulSetStatus represents the current state of a StatefulSet.
*/
export class V1StatefulSetStatus {
    /**
    * Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset. This is an alpha field and requires enabling StatefulSetMinReadySeconds feature gate. Remove omitempty when graduating to beta
    */
    'availableReplicas'?: number;
    /**
    * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
    */
    'collisionCount'?: number;
    /**
    * Represents the latest available observations of a statefulset's current state.
    */
    'conditions'?: Array<V1StatefulSetCondition>;
    /**
    * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
    */
    'currentReplicas'?: number;
    /**
    * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
    */
    'currentRevision'?: string;
    /**
    * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
    */
    'observedGeneration'?: number;
    /**
    * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
    */
    'readyReplicas'?: number;
    /**
    * replicas is the number of Pods created by the StatefulSet controller.
    */
    'replicas': number;
    /**
    * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
    */
    'updateRevision'?: string;
    /**
    * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
    */
    'updatedReplicas'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "availableReplicas",
            "baseName": "availableReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "collisionCount",
            "baseName": "collisionCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1StatefulSetCondition>",
            "format": ""
        },
        {
            "name": "currentReplicas",
            "baseName": "currentReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currentRevision",
            "baseName": "currentRevision",
            "type": "string",
            "format": ""
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "readyReplicas",
            "baseName": "readyReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "updateRevision",
            "baseName": "updateRevision",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedReplicas",
            "baseName": "updatedReplicas",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1StatefulSetStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

