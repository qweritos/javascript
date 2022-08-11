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

import { V1beta1AllowedCSIDriver } from '../models/V1beta1AllowedCSIDriver';
import { V1beta1AllowedFlexVolume } from '../models/V1beta1AllowedFlexVolume';
import { V1beta1AllowedHostPath } from '../models/V1beta1AllowedHostPath';
import { V1beta1FSGroupStrategyOptions } from '../models/V1beta1FSGroupStrategyOptions';
import { V1beta1HostPortRange } from '../models/V1beta1HostPortRange';
import { V1beta1RunAsGroupStrategyOptions } from '../models/V1beta1RunAsGroupStrategyOptions';
import { V1beta1RunAsUserStrategyOptions } from '../models/V1beta1RunAsUserStrategyOptions';
import { V1beta1RuntimeClassStrategyOptions } from '../models/V1beta1RuntimeClassStrategyOptions';
import { V1beta1SELinuxStrategyOptions } from '../models/V1beta1SELinuxStrategyOptions';
import { V1beta1SupplementalGroupsStrategyOptions } from '../models/V1beta1SupplementalGroupsStrategyOptions';
import { HttpFile } from '../http/http';

/**
* PodSecurityPolicySpec defines the policy enforced.
*/
export class V1beta1PodSecurityPolicySpec {
    /**
    * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
    */
    'allowPrivilegeEscalation'?: boolean;
    /**
    * AllowedCSIDrivers is an allowlist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is a beta field, and is only honored if the API server enables the CSIInlineVolume feature gate.
    */
    'allowedCSIDrivers'?: Array<V1beta1AllowedCSIDriver>;
    /**
    * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
    */
    'allowedCapabilities'?: Array<string>;
    /**
    * allowedFlexVolumes is an allowlist of Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the \"volumes\" field.
    */
    'allowedFlexVolumes'?: Array<V1beta1AllowedFlexVolume>;
    /**
    * allowedHostPaths is an allowlist of host paths. Empty indicates that all host paths may be used.
    */
    'allowedHostPaths'?: Array<V1beta1AllowedHostPath>;
    /**
    * AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
    */
    'allowedProcMountTypes'?: Array<string>;
    /**
    * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.  Examples: e.g. \"foo/_*\" allows \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" allows \"foo.bar\", \"foo.baz\", etc.
    */
    'allowedUnsafeSysctls'?: Array<string>;
    /**
    * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
    */
    'defaultAddCapabilities'?: Array<string>;
    /**
    * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
    */
    'defaultAllowPrivilegeEscalation'?: boolean;
    /**
    * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.  Examples: e.g. \"foo/_*\" forbids \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" forbids \"foo.bar\", \"foo.baz\", etc.
    */
    'forbiddenSysctls'?: Array<string>;
    'fsGroup': V1beta1FSGroupStrategyOptions;
    /**
    * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
    */
    'hostIPC'?: boolean;
    /**
    * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
    */
    'hostNetwork'?: boolean;
    /**
    * hostPID determines if the policy allows the use of HostPID in the pod spec.
    */
    'hostPID'?: boolean;
    /**
    * hostPorts determines which host port ranges are allowed to be exposed.
    */
    'hostPorts'?: Array<V1beta1HostPortRange>;
    /**
    * privileged determines if a pod can request to be run as privileged.
    */
    'privileged'?: boolean;
    /**
    * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
    */
    'readOnlyRootFilesystem'?: boolean;
    /**
    * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
    */
    'requiredDropCapabilities'?: Array<string>;
    'runAsGroup'?: V1beta1RunAsGroupStrategyOptions;
    'runAsUser': V1beta1RunAsUserStrategyOptions;
    'runtimeClass'?: V1beta1RuntimeClassStrategyOptions;
    'seLinux': V1beta1SELinuxStrategyOptions;
    'supplementalGroups': V1beta1SupplementalGroupsStrategyOptions;
    /**
    * volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
    */
    'volumes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowPrivilegeEscalation",
            "baseName": "allowPrivilegeEscalation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowedCSIDrivers",
            "baseName": "allowedCSIDrivers",
            "type": "Array<V1beta1AllowedCSIDriver>",
            "format": ""
        },
        {
            "name": "allowedCapabilities",
            "baseName": "allowedCapabilities",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "allowedFlexVolumes",
            "baseName": "allowedFlexVolumes",
            "type": "Array<V1beta1AllowedFlexVolume>",
            "format": ""
        },
        {
            "name": "allowedHostPaths",
            "baseName": "allowedHostPaths",
            "type": "Array<V1beta1AllowedHostPath>",
            "format": ""
        },
        {
            "name": "allowedProcMountTypes",
            "baseName": "allowedProcMountTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "allowedUnsafeSysctls",
            "baseName": "allowedUnsafeSysctls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "defaultAddCapabilities",
            "baseName": "defaultAddCapabilities",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "defaultAllowPrivilegeEscalation",
            "baseName": "defaultAllowPrivilegeEscalation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "forbiddenSysctls",
            "baseName": "forbiddenSysctls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "V1beta1FSGroupStrategyOptions",
            "format": ""
        },
        {
            "name": "hostIPC",
            "baseName": "hostIPC",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostNetwork",
            "baseName": "hostNetwork",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostPID",
            "baseName": "hostPID",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostPorts",
            "baseName": "hostPorts",
            "type": "Array<V1beta1HostPortRange>",
            "format": ""
        },
        {
            "name": "privileged",
            "baseName": "privileged",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readOnlyRootFilesystem",
            "baseName": "readOnlyRootFilesystem",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "requiredDropCapabilities",
            "baseName": "requiredDropCapabilities",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "V1beta1RunAsGroupStrategyOptions",
            "format": ""
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "V1beta1RunAsUserStrategyOptions",
            "format": ""
        },
        {
            "name": "runtimeClass",
            "baseName": "runtimeClass",
            "type": "V1beta1RuntimeClassStrategyOptions",
            "format": ""
        },
        {
            "name": "seLinux",
            "baseName": "seLinux",
            "type": "V1beta1SELinuxStrategyOptions",
            "format": ""
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "V1beta1SupplementalGroupsStrategyOptions",
            "format": ""
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1PodSecurityPolicySpec.attributeTypeMap;
    }

    public constructor() {
    }
}

