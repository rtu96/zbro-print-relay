import {Injectable} from '@nestjs/common';
import {Label} from './interfaces/label.interface';
import {ConfigService, InjectConfig} from 'nestjs-config';

const printer = require('@thiagoelg/node-printer');

@Injectable()
export class AppService {
    private printerAddress: string;
    private printerName: string;

    constructor(@InjectConfig() private config) {
    }

  // TODO: Build an actual template here
  /**
   * Function called when someone decides to print a label
   * @param labelData - Label type
   */
    printLabel(labelData: Label) {
      this.printerAddress = this.config.get('app.printerAddress');
      this.printerName = this.config.get('app.printerName');

      console.log('Printer name:', this.printerName);
      console.log('Printer address:', this.printerAddress);

        printer.printDirect({
            data: labelData.machineInfo.model + ' TEST123',
            type: 'TEXT',
            success: (jobID) => console.log("sent to printer ", this.printerAddress, " (" + this.printerName + ") with ID: " + jobID),
            error: (err) => console.log(err)
        });
    }

    /**
     * Debug only
     */
    emitConfig() {
        this.printerAddress = this.config.get('app.printerAddress');
        this.printerName = this.config.get('app.printerName');

        console.log('Printer name:', this.printerName);
        console.log('Printer address:', this.printerAddress);
    }
}
