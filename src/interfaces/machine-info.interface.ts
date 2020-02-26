// https://github.com/128keaton/macOS-Utilities/blob/master/macOS%20Utilities/Helpers/Parsers/SystemProfiler/Condensed/CondensedHardwareInfo.swift

import {StorageItem} from './storage-item.interface';
import {DisplayInfo} from './display-info.interface';
import {MemoryItem} from './memory-item.interface';
import {BatteryHealth} from './battery-health.interface';

export interface MachineInfo {
    model: string;
    serialNumber: string;
    processorInfo: string;
    numberOfCores: number;
    numberOfProcessors: number;
    totalMemory: string;
    l2CacheSize: string;
    l3CacheSize: string;
    storageDevices: StorageItem[];
    discDrives: StorageItem[];
    graphicsCards: DisplayInfo[];
    memory: MemoryItem[];
    batteryHealth?: BatteryHealth;
}
