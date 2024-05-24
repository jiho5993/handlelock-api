import { Injectable, PipeTransform } from '@nestjs/common';
import { isDateString } from 'class-validator';

@Injectable()
export class GetMembersQueryPipe implements PipeTransform {
  transform(value: any) {
    if (value?.joinStartDate && !isDateString(value.joinStartDate)) {
      value.joinStartDate = undefined;
    }
    if (value?.joinEndDate && !isDateString(value.joinEndDate)) {
      value.joinEndDate = undefined;
    }
    if (value?.birthStartDate && !isDateString(value.birthStartDate)) {
      value.birthStartDate = undefined;
    }
    if (value?.birthEndDate && !isDateString(value.birthEndDate)) {
      value.birthEndDate = undefined;
    }

    return value;
  }
}
