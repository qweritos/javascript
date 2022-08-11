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

import { V2beta1ContainerResourceMetricSource } from '../models/V2beta1ContainerResourceMetricSource';
import { V2beta1ExternalMetricSource } from '../models/V2beta1ExternalMetricSource';
import { V2beta1ObjectMetricSource } from '../models/V2beta1ObjectMetricSource';
import { V2beta1PodsMetricSource } from '../models/V2beta1PodsMetricSource';
import { V2beta1ResourceMetricSource } from '../models/V2beta1ResourceMetricSource';
import { HttpFile } from '../http/http';

/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
export class V2beta1MetricSpec {
    'containerResource'?: V2beta1ContainerResourceMetricSource;
    'external'?: V2beta1ExternalMetricSource;
    'object'?: V2beta1ObjectMetricSource;
    'pods'?: V2beta1PodsMetricSource;
    'resource'?: V2beta1ResourceMetricSource;
    /**
    * type is the type of metric source.  It should be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerResource",
            "baseName": "containerResource",
            "type": "V2beta1ContainerResourceMetricSource",
            "format": ""
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "V2beta1ExternalMetricSource",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "V2beta1ObjectMetricSource",
            "format": ""
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "V2beta1PodsMetricSource",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V2beta1ResourceMetricSource",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2beta1MetricSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

