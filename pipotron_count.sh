#!/bin/bash
intro=33
produits=46
adj_mark=39
adj_tech=20
verb=39
techno=5
techno_adj=22
dispo=21
part_present=12
verb_new_comp=19

tot=$(($intro*$produits*$adj_mark*$adj_tech*$verb*$techno_adj*$dispo + $dispo*$produits*$adj_mark*$adj_tech*$verb*$techno*$techno_adj))
tot=$(($tot + $part_present*$techno*$techno_adj*$produits*$adj_tech*$dispo2*$adj_mark + $produits*$adj_mark*$adj_tech*$dispo*$verb*$techno*$techno_adj))

tot2=$((1+$verb_new_comp*($produits-1)*$verb*($techno-1)*($techno_adj-1)))

echo $(($tot*$tot2))
