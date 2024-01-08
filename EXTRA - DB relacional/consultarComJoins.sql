select c.nome as cidade, p.nome as prefeito from cidades c
inner join prefeitos p on c.id = p.cidade_id

select c.nome as cidade, p.nome as prefeito from cidades c
left join prefeitos p on c.id = p.cidade_id

select c.nome as cidade, p.nome as prefeito from cidades c
left outer join prefeitos p on c.id = p.cidade_id

select c.nome as cidade, p.nome as prefeito from cidades c
right join prefeitos p on c.id = p.cidade_id

select c.nome as cidade, p.nome as prefeito from cidades c
right outer join prefeitos p on c.id = p.cidade_id

-- simulando o full join
select c.nome as cidade, p.nome as prefeito from cidades c
left join prefeitos p on c.id = p.cidade_id
union
select c.nome as cidade, p.nome as prefeito from cidades c
right join prefeitos p on c.id = p.cidade_id