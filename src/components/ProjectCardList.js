import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard";

export default function ProjectCardList({ projects, onProjectSelect, onProjectRemove }) {
    return (
        <Grid container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start">
            {projects.map(project => (
                <Grid key={project.id} item>
                    <ProjectCard
                        title={project.title}
                        desc={project.desc}
                        image={project.image}
                        onSelect={() => onProjectSelect(project.id)}
                        onRemove={() => onProjectRemove(project.id)}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
