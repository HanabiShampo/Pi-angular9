
import {Pipe, PipeTransform} from '@angular/core';
import { equipe } from '../model/equipe';



@Pipe({
    name: 'EquipeFilter'
})

export class EquipeFilterPipe implements PipeTransform {
    transform(equipe: equipe[], searchterm: string): equipe[] {
        if (! equipe|| !searchterm) {
            return equipe;
        }
        return equipe.filter((equipes: equipe) =>
        equipes.nom.toLowerCase().indexOf(searchterm) !== -1);
    }
}
