import {Injectable} from '@nestjs/common';
import {Label} from './interfaces/label.interface';

const printer = require('@thiagoelg/node-printer');

@Injectable()
export class AppService {

  // TODO: Build an actual template here
  /**
   * Function called when someone decides to print a label
   * @param labelData - Label type
   */
    printLabel(labelData: Label) {
        printer.printDirect({
            data: labelData.machineInfo.model + ' TEST123',
            type: 'TEXT',
            success: (jobID) => console.log("sent to printer with ID: " + jobID),
            error: (err) => console.log(err)
        });
    }
}
