import {Body, Controller, Get, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {Label} from './interfaces/label.interface';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Post()
    printLabel(@Body() body: Label) {
        return this.appService.printLabel(body);
    }

    @Get()
    displayMessage() {
        return 'Whoops!'
    }
}
