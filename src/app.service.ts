import {Injectable} from '@nestjs/common';
import {Label} from './interfaces/label.interface';
import {ConfigService} from 'nestjs-config';

const printer = require('@thiagoelg/node-printer');

@Injectable()
export class AppService {
    private readonly printerAddress: string;
    private readonly printerName: string;

    constructor(private readonly configService: ConfigService) {
        this.printerAddress = this.configService.get('printer.address');
        this.printerName = this.configService.get('printer.name');
    }
  // TODO: Build an actual template here
  /**
   * Function called when someone decides to print a label
   * @param labelData - Label type
   */
    printLabel(labelData: Label) {
        printer.printDirect({
            data: labelData.machineInfo.model + ' TEST123',
            type: 'TEXT',
            success: (jobID) => console.log("sent to printer ", this.printerAddress, " (" + this.printerName + ") with ID: " + jobID),
            error: (err) => console.log(err)
        });
    }
}
