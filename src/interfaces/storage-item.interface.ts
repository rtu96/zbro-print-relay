// https://github.com/128keaton/macOS-Utilities/blob/master/macOS%20Utilities/Helpers/Parsers/SystemProfiler/Condensed/CondensedStorageItem.swift

export interface StorageItem {
    deviceSerialNumber: string;
    storageItemType: string;
    storageDeviceSize: number;
    storageDeviceSizeUnit: string;
    manufacturer: string;
    isDiscDrive: boolean;
    isSDD: boolean;
    model: string
}
